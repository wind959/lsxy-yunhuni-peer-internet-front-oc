import {
  APP_COUNT,
  LASTDAY_COMSUME,
  LASTDAY_DURATION,
  MEMBER_APP_STATISTIC,
  CONSUME_DURATION_STATISTIC
} from '../mutation-types.js'

const state = {
  count: {
    online: 0,
    total: 0
  },
  duration: {
    duration_day : 0,
    day_rate : 0,
    week_rate : 0,
    month_rate : 0
  },
  comsume: {
    consume_day : 0,
    day_rate : 0,
    week_rate : 0,
    month_rate : 0
  },
  statistic :{
    memberapp: {
       app_count:[],
       member_count:[]
    },
    comsumeduration: {
      const:[],
      session:[]
    }
  }
}

const mutations = {
  [APP_COUNT] (state, app) {
    state.count = app
  },
  [LASTDAY_COMSUME] (state, comsume) {
    state.duration = comsume
  },
  [LASTDAY_DURATION] (state, comsume) {
    // state.duration = comsume
  },
  [MEMBER_APP_STATISTIC] (state, statistic) {
    state.statistic.memberapp = statistic
  },
  [CONSUME_DURATION_STATISTIC] (state, statistic) {
    state.statistic.comsumeduration = statistic
  }
}

export default {
  state,
  mutations
}