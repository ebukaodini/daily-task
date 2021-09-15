import { addPouchPlugin, getRxStoragePouch, createRxDatabase, isRxDocument } from 'rxdb';
import tasksSchema from './task.schema.json';
import settingsSchema from './settings.schema.json';
import { NewSettings } from '../../utils/constants/new-settings';

let dbPromise = null;

const _create = async () => {
  try {

    // add the pouchdb indexeddb adapter
    addPouchPlugin(require('pouchdb-adapter-idb'));

    // console.log('DatabaseService: removing old database...');
    // await removeRxDatabase('dailytasks_db', getRxStoragePouch('idb'),);

    console.log('DatabaseService: creating database..');
    const db = await createRxDatabase({
      name: 'dailytasks_db',
      // use pouchdb with the indexeddb-adapter as storage engine.
      storage: getRxStoragePouch('idb'),

    });

    console.log('DatabaseService: created database');
    window['db'] = db; // write to window for debugging

    // show leadership in title
    db.waitForLeadership().then(() => {
      console.log('isLeader now');
      // document.title = '♛ ' + document.title;
    });

    // create collections
    console.log('DatabaseService: creating collections');
    await db.addCollections({
      tasks: {
        schema: tasksSchema
      },
      settings: {
        schema: settingsSchema
      }
    })
    console.log('DatabaseService: created collections. ', db.collections);

    // remove tasks
    // await db.tasks.remove();
    console.log('Tasks: ', await db.tasks.find().exec())

    // add the settings if it doesn't exist
    let doc = await db.settings.findOne('settings').exec();
    if (doc === null || !isRxDocument(doc)) {
      console.log('Adding setings...')
      let ddoc = await db.settings.insert(NewSettings);
      console.log('Added setings: ', ddoc)
    } else {
      // remove settings
      // await db.settings.remove();
      console.log('Settings: ', doc);
    }

    return db;
  } catch (error) {
    console.error(error.message)
  }
};

export const get = () => {
  if (!dbPromise)
    dbPromise = _create();
  return dbPromise;
};