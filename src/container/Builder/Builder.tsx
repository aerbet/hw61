import { Component, MouseEvent } from 'react';
import InfoItems from '../../components/InfoItems';
import axios from 'axios';
import CountryList from '../../components/CountryList';

interface BuilderState {
  countryList: string[];
  extraInfo: {
    name: string;
    capital: string;
    population: number;
    area: number;
    flag: string;
    borders: string[];
  };
  flag: boolean;
}

interface Country {
  name: string;
}

class Builder extends Component<{}, BuilderState> {
  state: BuilderState = {
    countryList: [],
    extraInfo: {
      name: '',
      capital: '',
      population: 0,
      area: 0,
      flag: '',
      borders: [],
    },
    flag: false,
  };

  componentDidMount() {
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => {
        const copy = [...this.state.countryList];
        response.data.forEach((item: Country) => {
          copy.push(item.name);
        });
        this.setState({ countryList: copy });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchIt(event: MouseEvent<HTMLLIElement>) {
    const country = event.currentTarget.textContent as string;
    let countryInfo: {
      name: string;
      capital: string;
      population: number;
      area: number;
      flag: string;
      borders: string[];
    } | null = null;

    axios
      .get(`https://restcountries.com/v2/name/${country}`)
      .then((response) => {
        countryInfo = response.data[0];
        return Promise.all(
          response.data[0].borders.map(async (item: string) => {
            let response1 = await axios.get(`https://restcountries.com/v2/alpha/${item}`);
            return response1.data.name;
          })
        );
      })
      .then((item) => {
        countryInfo!.borders = item;
        this.setState({ extraInfo: countryInfo!, flag: true });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className='container'>
        <CountryList flag={this.state.flag} array={this.state.countryList} onClick={this.fetchIt.bind(this)} />
        <div className='info_div'>
          {this.state.flag ? (
            <InfoItems obj={this.state.extraInfo} />
          ) : (
            <div className='empty_sign'>
              <h1>Please Select Country</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Builder;