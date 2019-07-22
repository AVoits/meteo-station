import {Injectable} from '@angular/core';

import dataDischargeSet1961 from '../../assets/data/discharge/1961.json';
import dataDischargeSet1962 from '../../assets/data/discharge/1962.json';
import dataDischargeSet1963 from '../../assets/data/discharge/1963.json';
import dataDischargeSet1964 from '../../assets/data/discharge/1964.json';
import dataDischargeSet1965 from '../../assets/data/discharge/1965.json';
import dataDischargeSet1966 from '../../assets/data/discharge/1966.json';
import dataDischargeSet1967 from '../../assets/data/discharge/1967.json';
import dataDischargeSet1968 from '../../assets/data/discharge/1968.json';
import dataDischargeSet1969 from '../../assets/data/discharge/1969.json';
import dataDischargeSet1970 from '../../assets/data/discharge/1970.json';
import dataDischargeSet1971 from '../../assets/data/discharge/1971.json';
import dataDischargeSet1972 from '../../assets/data/discharge/1972.json';
import dataDischargeSet1973 from '../../assets/data/discharge/1973.json';
import dataDischargeSet1974 from '../../assets/data/discharge/1974.json';
import dataDischargeSet1975 from '../../assets/data/discharge/1975.json';
import dataDischargeSet1976 from '../../assets/data/discharge/1976.json';
import dataDischargeSet1977 from '../../assets/data/discharge/1977.json';
import dataDischargeSet1978 from '../../assets/data/discharge/1978.json';
import dataDischargeSet1979 from '../../assets/data/discharge/1979.json';
import dataDischargeSet1980 from '../../assets/data/discharge/1980.json';
import dataDischargeSet1981 from '../../assets/data/discharge/1981.json';
import dataDischargeSet1982 from '../../assets/data/discharge/1982.json';
import dataDischargeSet1983 from '../../assets/data/discharge/1983.json';
import dataDischargeSet1984 from '../../assets/data/discharge/1984.json';
import dataDischargeSet1985 from '../../assets/data/discharge/1985.json';
import dataDischargeSet1986 from '../../assets/data/discharge/1986.json';
import dataDischargeSet1987 from '../../assets/data/discharge/1987.json';
import dataDischargeSet1988 from '../../assets/data/discharge/1988.json';
import dataDischargeSet1989 from '../../assets/data/discharge/1989.json';
import dataDischargeSet1990 from '../../assets/data/discharge/1990.json';
import dataDischargeSet1991 from '../../assets/data/discharge/1991.json';
import dataDischargeAverage from '../../assets/data/discharge/average.json';

import dataWeatherSet1961 from '../../assets/data/weather/1961.json';
import dataWeatherSet1962 from '../../assets/data/weather/1962.json';
import dataWeatherSet1963 from '../../assets/data/weather/1963.json';
import dataWeatherSet1964 from '../../assets/data/weather/1964.json';
import dataWeatherSet1965 from '../../assets/data/weather/1965.json';
import dataWeatherSet1966 from '../../assets/data/weather/1966.json';
import dataWeatherSet1967 from '../../assets/data/weather/1967.json';
import dataWeatherSet1968 from '../../assets/data/weather/1968.json';
import dataWeatherSet1969 from '../../assets/data/weather/1969.json';
import dataWeatherSet1970 from '../../assets/data/weather/1970.json';
import dataWeatherSet1971 from '../../assets/data/weather/1971.json';
import dataWeatherSet1972 from '../../assets/data/weather/1972.json';
import dataWeatherSet1973 from '../../assets/data/weather/1973.json';
import dataWeatherSet1974 from '../../assets/data/weather/1974.json';
import dataWeatherSet1975 from '../../assets/data/weather/1975.json';
import dataWeatherSet1976 from '../../assets/data/weather/1976.json';
import dataWeatherSet1977 from '../../assets/data/weather/1977.json';
import dataWeatherSet1978 from '../../assets/data/weather/1978.json';
import dataWeatherSet1979 from '../../assets/data/weather/1979.json';
import dataWeatherSet1980 from '../../assets/data/weather/1980.json';
import dataWeatherSet1981 from '../../assets/data/weather/1981.json';
import dataWeatherSet1982 from '../../assets/data/weather/1982.json';
import dataWeatherSet1983 from '../../assets/data/weather/1983.json';
import dataWeatherSet1984 from '../../assets/data/weather/1984.json';
import dataWeatherSet1985 from '../../assets/data/weather/1985.json';
import dataWeatherSet1986 from '../../assets/data/weather/1986.json';
import dataWeatherSet1987 from '../../assets/data/weather/1987.json';
import dataWeatherSet1988 from '../../assets/data/weather/1988.json';
import dataWeatherSet1989 from '../../assets/data/weather/1989.json';
import dataWeatherSet1990 from '../../assets/data/weather/1990.json';
import dataWeatherSet1991 from '../../assets/data/weather/1991.json';
import dataWeatherSet1992 from '../../assets/data/weather/1992.json';
import dataWeatherSet1993 from '../../assets/data/weather/1993.json';
import dataWeatherSet1994 from '../../assets/data/weather/1994.json';
import dataWeatherSet1995 from '../../assets/data/weather/1995.json';
import dataWeatherSet1996 from '../../assets/data/weather/1996.json';
import dataWeatherSet1997 from '../../assets/data/weather/1997.json';
import dataWeatherSet1998 from '../../assets/data/weather/1998.json';
import dataWeatherSet1999 from '../../assets/data/weather/1999.json';
import dataWeatherSet2000 from '../../assets/data/weather/2000.json';
import dataWeatherSet2001 from '../../assets/data/weather/2001.json';
import dataWeatherSet2002 from '../../assets/data/weather/2002.json';
import dataWeatherSet2003 from '../../assets/data/weather/2003.json';
import dataWeatherSet2004 from '../../assets/data/weather/2004.json';
import dataWeatherSet2005 from '../../assets/data/weather/2005.json';
import dataWeatherSet2006 from '../../assets/data/weather/2006.json';
import dataWeatherSet2007 from '../../assets/data/weather/2007.json';
import dataWeatherSet2008 from '../../assets/data/weather/2008.json';
import dataWeatherSet2009 from '../../assets/data/weather/2009.json';
import dataWeatherSet2010 from '../../assets/data/weather/2010.json';
import dataWeatherSet2011 from '../../assets/data/weather/2011.json';
import dataWeatherSet2012 from '../../assets/data/weather/2012.json';
import dataWeatherSet2013 from '../../assets/data/weather/2013.json';
import dataWeatherSet2014 from '../../assets/data/weather/2014.json';
import dataWeatherSet2015 from '../../assets/data/weather/2015.json';
import dataWeatherAverage from '../../assets/data/weather/average.json';


@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public dischargeSet = [
    dataDischargeSet1961,
    dataDischargeSet1962,
    dataDischargeSet1963,
    dataDischargeSet1964,
    dataDischargeSet1965,
    dataDischargeSet1966,
    dataDischargeSet1967,
    dataDischargeSet1968,
    dataDischargeSet1969,
    dataDischargeSet1970,
    dataDischargeSet1971,
    dataDischargeSet1972,
    dataDischargeSet1973,
    dataDischargeSet1974,
    dataDischargeSet1975,
    dataDischargeSet1976,
    dataDischargeSet1977,
    dataDischargeSet1978,
    dataDischargeSet1979,
    dataDischargeSet1980,
    dataDischargeSet1981,
    dataDischargeSet1982,
    dataDischargeSet1983,
    dataDischargeSet1984,
    dataDischargeSet1985,
    dataDischargeSet1986,
    dataDischargeSet1987,
    dataDischargeSet1988,
    dataDischargeSet1989,
    dataDischargeSet1990,
    dataDischargeSet1991,
  ];
  public dischargeAverage = dataDischargeAverage;
  public startEndDischarge = {
    start: 1961,
    end: 1991
  };

  public weatherSet = [
    dataWeatherSet1961,
    dataWeatherSet1962,
    dataWeatherSet1963,
    dataWeatherSet1964,
    dataWeatherSet1965,
    dataWeatherSet1966,
    dataWeatherSet1967,
    dataWeatherSet1968,
    dataWeatherSet1969,
    dataWeatherSet1970,
    dataWeatherSet1971,
    dataWeatherSet1972,
    dataWeatherSet1973,
    dataWeatherSet1974,
    dataWeatherSet1975,
    dataWeatherSet1976,
    dataWeatherSet1977,
    dataWeatherSet1978,
    dataWeatherSet1979,
    dataWeatherSet1980,
    dataWeatherSet1981,
    dataWeatherSet1982,
    dataWeatherSet1983,
    dataWeatherSet1984,
    dataWeatherSet1985,
    dataWeatherSet1986,
    dataWeatherSet1987,
    dataWeatherSet1988,
    dataWeatherSet1989,
    dataWeatherSet1990,
    dataWeatherSet1991,
    dataWeatherSet1992,
    dataWeatherSet1993,
    dataWeatherSet1994,
    dataWeatherSet1995,
    dataWeatherSet1996,
    dataWeatherSet1997,
    dataWeatherSet1998,
    dataWeatherSet1999,
    dataWeatherSet2000,
    dataWeatherSet2001,
    dataWeatherSet2002,
    dataWeatherSet2003,
    dataWeatherSet2004,
    dataWeatherSet2005,
    dataWeatherSet2006,
    dataWeatherSet2007,
    dataWeatherSet2008,
    dataWeatherSet2009,
    dataWeatherSet2010,
    dataWeatherSet2011,
    dataWeatherSet2012,
    dataWeatherSet2013,
    dataWeatherSet2014,
    dataWeatherSet2015,
  ];
  public weatherAverage = dataWeatherAverage;
  public startEndWeather = {
    start: 1961,
    end: 2015
  };

  public getDischargeSet() {
    return this.dischargeSet;
  }

  public getWeatherSet() {
    return this.weatherSet;
  }

  public getDischargeAverage() {
    return this.dischargeAverage;
  }

  public getWeatherAverage() {
    return this.weatherAverage;
  }

  public getStartEndDates(type: 'discharge' | 'weather') {
    return type === 'discharge' ? this.startEndDischarge : this.startEndWeather;
  }
}
