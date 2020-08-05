import { DatePicker } from "antd"

export const getPixelString = (value, defaultValue) => {
    if (value === 0) {
        return '0'
    } else if (value === undefined) {
        if (defaultValue === null) {
            return undefined
        } else {
            return defaultValue + 'px'
        }
    } else {
        return value + 'px'
    }
}

export const getDateObject = date => {
  let _date = new Date(date)
  let Y = _date.getFullYear()
  let M = _date.getMonth() + 1 < 10 ? '0' + (_date.getMonth() + 1) : _date.getMonth() + 1    
  let D = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate()
  return {
    year: Y,
    month: M,
    date: D
  }
}

export const getPaginationArray = (currentPage, totalPage) => {
  const arr = []
  for(let i = 0; i <= totalPage; i++) {
    arr.push(i)
  }
  if(totalPage <= 5) {
    return arr.slice(1, totalPage + 1)
  } else {
    if (currentPage <= 3) {
      return arr.slice(1, 6)
    } else if(totalPage - currentPage === 1){
      return arr.slice(currentPage - 3, totalPage + 1)
    } else if (totalPage === currentPage) {
      return arr.slice(currentPage - 4, totalPage + 1)
    } else {
      return arr.slice(currentPage - 2, currentPage + 3)
    }
  }
}

// 标签颜色组
export const colorStyle = {
    magenta: {
      color: '#eb2f96',
      'background-color': '#fff0f6',
      'border-color': '#ffadd2'
    },
    red: {
      color: '#f5222d',
      'background-color': '#fff1f0',
      'border-color': '#ffa39e'
    },
    volcano: {
      color: '#fa541c',
      'background-color': '#fff2e8',
      'border-color': '#ffbb96'
    },
    orange: {
      color: '#fa8c16',
      'background-color': '#fff7e6',
      'border-color': '#ffd591'
    },
    gold: {
      color: '#faad14',
      'background-color': '#fffbe6',
      'border-color': '#ffe58f'
    },
    lime: {
      color: '#a0d911',
      'background-color': '#fcffe6',
      'border-color': '#eaff8f'
    },
    green: {
      color: '#52c41a',
      'background-color': '#f6ffed',
      'border-color': '#b7eb8f'
    },
    cyan: {
      color: '#13c2c2',
      'background-color': '#e6fffb',
      'border-color': '#87e8de'
    },
    blue: {
      color: '#1890ff',
      'background-color': '#e6f7ff',
      'border-color': '#91d5ff'
    },
    geekblue: {
      color: '#2f54eb',
      'background-color': '#f0f5ff',
      'border-color': '#adc6ff'
    },
    purple: {
      color: '#722ed1',
      'background-color': '#f9f0ff',
      'border-color': '#d3adf7'
    }
  }

  // 标签颜色名称
  export const colorName = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
  ]
