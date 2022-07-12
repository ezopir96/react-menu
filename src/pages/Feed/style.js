import styled from 'styled-components'

// 热门分类
export const HotCateContainer = styled.div`
  background-color: white;
  .title {
    color: #949494;
    padding: 0.1rem;
  }
`

// 精品列表
export const GoodFoodContainer = styled.div`
  padding-left: 0.1rem;
  > h1 {
    height: 0.5rem;
    line-height: 0.6rem;
    padding-left: 0.15rem;
    color: #666;
    padding-left: 0;
    font-size: 0.16rem;
  }
  .wrapper {
    height: 300px;
    /* background: pink; */
    overflow: hidden;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    > dl {
      /* 计算属性 */
      width: calc(50% - 0.1rem);
      background: #fff;
      margin-right: 0.1rem;
      margin-bottom: 0.1rem;
      dt {
        img {
          width: 100%;
        }
      }
      dd {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.1rem;
        h3 {
          font-size: 0.16rem;
        }
        p {
          font-size: 0.12rem;
          color: #666;
        }
      }
    }
  }
  .more {
    width: calc(100% - 0.1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.5rem;
  }
`
