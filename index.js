const alfy = require('alfy')
const chromeBookmarkReader = require('chrome-bookmark-reader')
const os = require('os')

const getDefaultPath = () =>
  `${os.homedir()}/Library/Application Support/Google/Chrome/Default/Bookmarks`

const path = process.env.BOOKMARK_FILE_PATH
  ? process.env.BOOKMARK_FILE_PATH
  : getDefaultPath()

const data = chromeBookmarkReader.getChromeBookmark(path)

const mapToItem = (bookmark) => {
  return {
    title: bookmark.name,
    subtitle: bookmark.url,
    arg: bookmark.url,
    icon: {
      type: 'png',
      path: 'icon.png'
    }
  }
}

const items = alfy
  .inputMatches(data, 'name')
  .map(element => mapToItem(element))

alfy.output(items)
