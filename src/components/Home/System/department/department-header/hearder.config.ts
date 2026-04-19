// 部门头配置

const headerConfig = {
  /** 搜索类型 */
  'searchType': 'department',

  /** 默认数据 */
  'defaultData': {
    name: '',
    leader: '',
    enable: 1,
    createAt: [],
  },

  /** 表单配置项 */
  'el-form-item': [
    {
      label: '部门名称',
      prop: 'name',
      type: 'input',
      placeholder: '请输入部门名称',
    },
    {
      label: '部门领导',
      prop: 'leader',
      type: 'input',
      placeholder: '请输入查询的领导名称',
    },
    {
      label: '状态',
      prop: 'enable',
      type: 'select',
      placeholder: '请选择状态',
      options: [
        {
          label: '启用',
          value: 1,
        },
        {
          label: '禁用',
          value: 0,
        },
      ],
    },
    {
      label: '创建时间',
      prop: 'createAt',
      type: 'daterange',
      placeholder: '请选择创建时间',
      rangeSeparator: '/',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
    },
  ],
}

export default headerConfig
