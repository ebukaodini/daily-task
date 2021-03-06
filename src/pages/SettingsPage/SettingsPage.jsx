import { useState, useEffect } from "react";
import { ArrowRight, Plus, X } from "react-feather";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Layout, Title } from "../../components";
import { updateSettings } from "../../store/settings/settings.actions";
import { Board } from "../../utils/constants/board";
import { TagColors } from "../../utils/constants/tag-colors";
import { TaskStatus } from "../../utils/constants/task-status";
import { nanoId } from "../../utils/helpers/nanoId";
import "./SettingsPage.scss";

export default function SettingsPage() {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  const updateDarkMode = () => {
    let updatedSettings = { ...settings, darkMode: !settings.darkMode }
    dispatch(updateSettings(updatedSettings))
  }

  const updateTitle = (title) => {
    let updatedSettings = { ...settings, title }
    dispatch(updateSettings(updatedSettings))
  }

  const updateEnableAutomation = async () => {
    let updatedSettings = { ...settings, automateBoardReset: !settings.automateBoardReset }
    dispatch(updateSettings(updatedSettings))
  }

  const updateAutomationTime = async (time) => {
    // TODO: formate the time to 12 hour format before updating
    // then display the formatted time
    let updatedSettings = { ...settings, boardResetTime: time }
    dispatch(updateSettings(updatedSettings))
  }

  const updateAutomationAction = (index, action) => {
    let actions = [...settings.resetActions];
    actions[index] = action;
    let updatedSettings = { ...settings, resetActions: actions }
    dispatch(updateSettings(updatedSettings))
  }

  const removeAutomatedAction = (index) => {
    let actions = [...settings.resetActions];
    actions.splice(index, 1);
    let updatedSettings = { ...settings, resetActions: actions }
    dispatch(updateSettings(updatedSettings))
  }

  const addAutomationAction = () => {
    let actions = [...settings.resetActions];
    actions.push({
      status: TaskStatus.pending,
      board: Board.backlog
    });
    let updatedSettings = { ...settings, resetActions: actions }
    dispatch(updateSettings(updatedSettings))
  }

  const addTag = () => {
    let tags = [...settings.tags];
    tags.push({
      id: new Date().toISOString(),
      colorCode: "B3BAC4",
      description: ""
    });
    let updatedSettings = { ...settings, tags }
    dispatch(updateSettings(updatedSettings))
  }

  const removeTag = (index) => {
    let tags = [...settings.tags];
    tags.splice(index, 1);
    let updatedSettings = { ...settings, tags }
    dispatch(updateSettings(updatedSettings))
  }

  const updateTagDescription = (index, tag) => {
    let tags = [...settings.tags];
    tags[index] = tag;
    let updatedSettings = { ...settings, tags }
    dispatch(updateSettings(updatedSettings))
  }

  const updateTagColorCode = (index, tag) => {
    let tags = [...settings.tags];
    tags[index] = tag;
    let updatedSettings = { ...settings, tags }
    dispatch(updateSettings(updatedSettings))
  }

  const miniTimeType = {
    hour: 'Hour', min: 'Minutes', mrd: 'Meridian'
  }

  const formatTime = (miniTime, type) => {
    let time = settings.boardResetTime;
    switch (type) {
      case miniTimeType.hour:
        time = time.toString().replace(/^\d\d:/, miniTime + ':');
        break;
      case miniTimeType.min:
        time = time.toString().replace(/:\d\d\s/, ':' + miniTime + ' ');
        break;
      case miniTimeType.mrd:
        time = time.toString().replace(/\s(AM|PM)$/, ' ' + miniTime);
        break;
      default:
        break;
    }
    updateAutomationTime(time);
  }

  const [bRTime, setBRTime] = useState({ hour: '01', min: '00', mrd: 'AM' });

  useEffect(() => {
    let time = settings.boardResetTime ?? "";
    let hour = time.toString().substr(0, 2);
    let min = time.substr(3, 2);
    let mrd = time.substr(6, 2);
    setBRTime({ hour, min, mrd });

    return;
  }, [settings.boardResetTime])

  const [selectedTag, setSelectedTag] = useState();

  return (
    <Layout>
      <section>
        <Title title='Settings' shouldPop />

        <div className='__settings'>

          <div className='__title_setting'>
            <h3 className='__setting_title'>Title</h3>
            <small className='__setting_description'>You can personalize the title of the application.</small>

            <input
              type="text"
              className='__title_input'
              value={settings.title ?? ''}
              onChange={(e) => updateTitle(e.target.value)}
            />
          </div>

          <div className='__darkmode_setting'>
            <h3 className='__setting_title'>
              Dark Mode
            </h3>

            <div>
              <label htmlFor='__darkmode_checkbox'>Enable dark mode</label>
              <input type='checkbox'
                id='__darkmode_checkbox'
                checked={settings.darkMode ?? false}
                onChange={updateDarkMode}
              />
              <div className='__rectangle ' onClick={updateDarkMode}>
                <div className={`__circle ${settings.darkMode && '__enabled'}`}></div>
              </div>
            </div>
          </div>

          <div className='__automation_setting'>
            <h3 className='__setting_title'>Automation</h3>
            <small className='__setting_description'>These actions automatically reset the tasks board at the end of each day.</small>

            <div className='__settings_group'>

              <div className='__enable_automation_setting'>

                <label htmlFor="__enable_automation_checkbox">
                  Enable Automation
                </label>

                <input
                  type="checkbox"
                  id="__enable_automation_checkbox"
                  checked={settings.automateBoardReset ?? false}
                  onChange={updateEnableAutomation}
                />

                <div className='__rectangle ' onClick={updateEnableAutomation}>
                  <div className={`__circle ${settings.automateBoardReset && '__enabled'}`}></div>
                </div>

              </div>

              <div className='__automation_time_setting'>

                <label htmlFor='__automation_time'>End of Day</label>

                <div className='__automation_time'>
                  <select
                    value={bRTime.hour}
                    onChange={(e) => formatTime(e.target.value, miniTimeType.hour)}
                    id='__automation_time'
                  >
                    {
                      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((hour, index) => (
                        <option key={index} value={hour}>{hour}</option>
                      ))
                    }
                  </select>
                  <span>:</span>
                  <select
                    value={bRTime.min}
                    onChange={(e) => formatTime(e.target.value, miniTimeType.min)}
                  >
                    {
                      [
                        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
                        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
                      ].map((min, index) => (
                        <option key={index} value={min}>{min}</option>
                      ))
                    }
                  </select>
                  <select
                    value={bRTime.mrd}
                    onChange={(e) => formatTime(e.target.value, miniTimeType.mrd)}
                  >
                    {
                      ['AM', 'PM'].map((mrd, index) => (
                        <option key={index} value={mrd}>{mrd}</option>
                      ))
                    }
                  </select>
                </div>

              </div>

              <div className='__automation_actions_setting'>

                <div className='__action_descriptors'>
                  <h4 className='__setting_subtitle'>Move</h4>
                  <h4 className='__setting_subtitle'>To</h4>
                </div>

                <div className='__actions'>
                  {
                    settings.resetActions &&
                    settings.resetActions.map((action, index) => (
                      <div key={nanoId()} className='__action'>

                        <select
                          defaultValue={action.status}
                          disabled={!settings.automateBoardReset}
                          onChange={(e) => {
                            updateAutomationAction(index, {
                              status: e.target.value,
                              board: action.board
                            })
                          }}
                          className='__action_from'>
                          <optgroup label='Task Status'>
                            {
                              Object.values(TaskStatus).map(stat => (
                                <option key={nanoId()} defaultValue={stat}>{stat}</option>
                              ))
                            }
                          </optgroup>
                        </select>

                        <button
                          disabled={!settings.automateBoardReset}
                          onClick={() => removeAutomatedAction(index)}>
                          <ArrowRight className='__arrow' />
                          <X className='__close' />
                        </button>

                        <select
                          disabled={!settings.automateBoardReset}
                          defaultValue={action.board}
                          onChange={(e) => {
                            updateAutomationAction(index, {
                              status: action.status,
                              board: e.target.value
                            })
                          }}
                          className='__action_to'>
                          <optgroup label='Board'>
                            {
                              Object.values(Board).map(board => (
                                <option
                                  key={nanoId()}
                                  value={board}
                                >
                                  {board}
                                </option>
                              ))
                            }
                          </optgroup>
                        </select>

                      </div>
                    ))
                  }
                </div>

                <button
                  className='__add_action'
                  disabled={!settings.automateBoardReset}
                  onClick={addAutomationAction}>
                  <Plus />
                  <span>Add action</span>
                </button>
              </div>

            </div>
          </div>

          <div className='__tags_setting'>
            <h3 className='__setting_title'>Tags</h3>
            <small className='__setting_description'>Categorize your tasks by creating tags for them.</small>

            <div className='__settings_group'>
              {
                settings.tags &&
                settings.tags.map((tag, index) => (
                  <div className='__tag' key={nanoId()}>

                    <div className='__tag_content'>

                      <div
                        onClick={() => { setSelectedTag(selectedTag === index ? -1 : index) }}
                        className={`__tag_color __${tag.colorCode}`}
                      ></div>

                      <div
                        contentEditable={true}
                        suppressContentEditableWarning
                        className='__tag_description'
                        onBlur={e =>
                          updateTagDescription(index, {
                            id: tag.id,
                            colorCode: tag.colorCode,
                            description: e.target.innerText
                          })
                        }
                      >
                        {tag.description}
                      </div>

                      <button onClick={() => removeTag(index)} className='__tag_remove'>
                        <X size={20} />
                      </button>

                    </div>

                    <div className={`__tag_color_list ${selectedTag === index && '__selected'}`}>

                      {Object.values(TagColors).map(color => (
                        <div key={nanoId()}
                          onClick={() => {
                            updateTagColorCode(index, {
                              id: tag.id,
                              colorCode: color,
                              description: tag.description
                            })
                          }}
                          className={`__color __${color}`}></div>
                      ))}

                    </div>

                  </div>
                ))
              }
              <button
                className='__add_tag'
                onClick={addTag}>
                <Plus />
                <span>Add tag</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </Layout >
  )
}