const alfyTest = require('alfy-test')
const assert = require('assert')

describe('alfy', () => {
  process.env.BOOKMARK_FILE_PATH = `${__dirname}/Bookmarks.json`
  const alfy = alfyTest()

  it('finds bookmark', async () => {
    const actual = await alfy('amazon')

    assert.deepStrictEqual(actual, [
      {
        arg: 'https://www.amazon.com/',
        icon: {
          path: 'icon.png',
          type: 'png'
        },
        subtitle: 'https://www.amazon.com/',
        title: 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more'
      }
    ])
  })
})
