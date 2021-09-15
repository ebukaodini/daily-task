import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../services/database/database";

let db;
async function loadDb() { return await get(); }
loadDb()
  .then(_db => db = _db);

export const settingsActions = {

};

export const getSettings = createAsyncThunk(
  'settings/getSettings',
  async () => {
    try {
      let settings = await db.settings.findOne('settings').exec();
      return settings.toJSON();
    } catch (error) {
      console.error(error.message);
    }
  })

export const updateSettings = createAsyncThunk(
  'settings/updateSettings',
  async (settings) => {
    try {
      let doc = await db.settings.findOne('settings').exec();
      let updated = await doc.atomicUpdate((doc) => {
        return settings;
      });
      return updated.toJSON();
    } catch (error) {
      console.error(error.message);
    }
  }
)

export const settingsExtraReducers = (builder) => {
  builder
    .addCase(getSettings.fulfilled, (state, { payload }) => {
      return payload;
    })
    .addCase(updateSettings.fulfilled, (state, {payload}) => {
      return payload;
    })
}