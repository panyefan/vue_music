import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

// 播放器的状态声明
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [], // 播放列表
  sequenceList: [], // 歌曲列表（这是一个顺序列表）
  mode: playMode.sequence, // 默认顺序播放
  currentIndex: -1, // 当前播放的歌曲索引
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
