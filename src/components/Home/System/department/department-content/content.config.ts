const contentConfig = {
  /** 内容类型 */
  contentType: 'department',
  /** 内容头配置 */
  header: {
    title: '部门列表',
    btnName: '新建部门',
  },
  /** 内容体配置 */
  elTable: [
    {
      align: 'center',
      type: 'selection',
    },
    {
      align: 'center',
      type: 'index',
      width: 60,
      label: '序号',
    },
    {
      prop: 'name',
      label: '部门名称',
    },
    {
      prop: 'leader',
      label: '部门领导',
    },
    {
      prop: 'parentId',
      label: '上级部门',
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
    },
  ],
}

export default contentConfig
