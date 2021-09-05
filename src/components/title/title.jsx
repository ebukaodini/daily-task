import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router";
import './title.scss';

/**
 * component to render page title
 * @param {String} title the page title
 * @param {Boolean} shouldPop enable back button
 * @returns 
 */
export default function Title({ title, shouldPop }) {

  // default parameters
  shouldPop = shouldPop || false;

  const history = useHistory();

  return (
    <div className='__page_title'>
      {shouldPop === true &&
        <button className='__back_button' onClick={() => history.goBack()}>
          <ArrowLeft />
        </button>
      }
      <h2 className='__title'>{title}</h2>
    </div>
  )
}