import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import appstyles from './styles/appstyles.module.css';

class CardItem extends React.Component {

  constructor(props) {

    super(props);
    this.state = { indicators: {summary: 'Analyzing...'} }
  }



  async componentDidMount() {

    const { id } = this.props.match.params;
    /* eslint-enable react/destructuring-assignment */
    const symbol = `${id.toUpperCase().slice(0, 3)}/${id.toUpperCase().slice(-3)}`;

    const normalize = data => {
      const newObj = {};
      const obj = Object.entries(data);
      for (const [key, value] of obj) {
        newObj[key] = value.s || value;
      }

      return newObj;
    };

    const url = `https://fcsapi.com/api-v2/forex/indicators?symbol=${symbol}&period=1h&access_key=vNB8FiE2F9mlUEVMgI2QLEXJzVZPxRJmgIypksJaYZL1jARQ5U`;
    const response = await fetch(url)
    const resp = await response.json();

    console.log(resp)
    const result = normalize(resp.response.indicators);
    const pair = resp.info.symbol

    this.setState({indicators: result, pair: pair })

  }

  render() {

    const stats = this.state.indicators
    const { pair } = this.state


    //const [stats, setStats] = useState({ summary: 'Analizyng...' });
    /* eslint-disable react/destructuring-assignment */

    return (
      <div className={appstyles.card_indicators}>

        <h1>
          {' '}
{pair}
        </h1>

        <h2 style={{ backgroundColor: 'yellow' }}>
          {' '}
          {stats.summary}
        </h2>
        <div className={appstyles.card_indicators_details}>
          <span>
            <h3>RSI:</h3>
            {' '}
            {stats.RSI14}
          </span>
          <span>
            <h3>ATR:</h3>
            {' '}
            {stats.ATR14}
          </span>
          <span>
            <h3>MACD:</h3>
            {' '}
            {stats.MACD12_26}
          </span>
          <span>
            <h3>STOCH:</h3>
            {' '}
            {stats.STOCH9_6}
          </span>
          <span>
            <h3>WILLIAMS:</h3>
            {' '}
            {stats.williamsR}
          </span>
        </div>
        <button type="button" className={appstyles.goback} onClick={() => this.props.history.push('/')}>GO BACK</button>

      </div>

    );
  }
};

CardItem.propTypes = {

 
  
  /* eslint-disable no-dupe-keys */
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.shape({ length: PropTypes.number.isRequired }),
  /* eslint-enable no-dupe-keys */

};


export default CardItem;
