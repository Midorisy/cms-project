export default {
  collectionType: 'department',
  collectionTypeInfo: {
    name: '',
    leader: '',
    parentId: null,
  },
  header: {
    addTitle: '新建部门',
    editTitle: '编辑部门',
  },
  elFormItem: [
    {
      prop: 'name',
      label: '部门名称',
      type: 'input',
      placeholder: '请输入部门名称',
    },
    {
      prop: 'leader',
      label: '部门领导',
      type: 'input',
      placeholder: '请输入部门领导',
    },
    {
      prop: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
    },
    {
      prop: 'roleList',
      type: 'slot',
      label: '设置权限',
      slotList: [
        {
          slotName: 'roleList',
        },
        {
          slotName: 'menuList',
        },
      ],
    },
  ],
}
