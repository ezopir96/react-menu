import Feed from '@/pages/Feed'
import Category from '@/pages/Category'
import News from '@/pages/News'
import Center from '@/pages/Center'

const config = [
  {
    title: '菜谱',
    key: 'feed',
    icon: 'http://img.1314000.cn/icon/cookbook.png',
    selectedIcon: 'http://img.1314000.cn/icon/cookbook-active.png',
    component: <Feed />
  },
  {
    title: '分类',
    key: 'category',
    icon: 'http://img.1314000.cn/icon/category.png',
    selectedIcon: 'http://img.1314000.cn/icon/category-active.png',
    component: <Category />
  },
  {
    title: '资讯',
    key: 'news',
    icon: 'http://img.1314000.cn/icon/news.png',
    selectedIcon: 'http://img.1314000.cn/icon/news-active.png',
    component: <News />
  },
  {
    title: '个人',
    key: 'center',
    icon: 'http://img.1314000.cn/icon/center.png',
    selectedIcon: 'http://img.1314000.cn/icon/center-active.png',
    component: <Center />
  }
]

export default config

