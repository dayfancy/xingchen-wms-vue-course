import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '货主编码',
    align: 'center',
    dataIndex: 'ownerCode',
  },
  {
    title: '货主名称',
    align: 'center',
    dataIndex: 'ownerName',
  },
  {
    title: '国家',
    align: 'center',
    dataIndex: 'country',
  },
  {
    title: '城市',
    align: 'center',
    dataIndex: 'city',
  },
  {
    title: '地址',
    align: 'center',
    dataIndex: 'address',
  },
  {
    title: '邮编',
    align: 'center',
    dataIndex: 'postalCode',
  },
  {
    title: '邮箱',
    align: 'center',
    dataIndex: 'email',
  },
  {
    title: '电话',
    align: 'center',
    dataIndex: 'phone',
  },
  {
    title: '法人代表',
    align: 'center',
    dataIndex: 'legalPerson',
  },
  {
    title: '联系人',
    align: 'center',
    dataIndex: 'contactPerson',
  },
  {
    title: '联系人电话',
    align: 'center',
    dataIndex: 'contactPhone',
  },
  {
    title: '许可证号码',
    align: 'center',
    dataIndex: 'licenseNumber',
  },
  {
    title: '许可证有效期',
    align: 'center',
    dataIndex: 'licenseValidDate',
    customRender: ({ text }) => {
      text = !text ? '' : text.length > 10 ? text.substr(0, 10) : text;
      return text;
    },
  },
  {
    title: '许可证附件',
    align: 'center',
    dataIndex: 'licenseAttachment',
  },
  {
    title: '统一社会信用代码',
    align: 'center',
    dataIndex: 'usci',
  },
  {
    title: '营业执照附件路径',
    align: 'center',
    dataIndex: 'businessLicenseAttachment',
  },
  {
    title: '结算币种',
    align: 'center',
    dataIndex: 'settlementCurrency_dictText',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status_dictText',
  },
  {
    title: '备注',
    align: 'center',
    dataIndex: 'remarks',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '货主名称',
    field: 'ownerName',
    component: 'Input',
    //colProps: {span: 6},
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '货主编码',
    field: 'ownerCode',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '货主名称',
    field: 'ownerName',
    component: 'Input',
  },
  {
    label: '国家',
    field: 'country',
    component: 'Input',
  },
  {
    label: '城市',
    field: 'city',
    component: 'Input',
  },
  {
    label: '地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '邮编',
    field: 'postalCode',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '电话',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '法人代表',
    field: 'legalPerson',
    component: 'Input',
  },
  {
    label: '联系人',
    field: 'contactPerson',
    component: 'Input',
  },
  {
    label: '联系人电话',
    field: 'contactPhone',
    component: 'Input',
  },
  {
    label: '许可证号码',
    field: 'licenseNumber',
    component: 'Input',
  },
  {
    label: '许可证有效期',
    field: 'licenseValidDate',
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    label: '许可证附件',
    field: 'licenseAttachment',
    component: 'JUpload',
    componentProps: {},
  },
  {
    label: '统一社会信用代码',
    field: 'usci',
    component: 'Input',
  },
  {
    label: '营业执照附件路径',
    field: 'businessLicenseAttachment',
    component: 'JUpload',
    componentProps: {},
  },
  {
    label: '结算币种',
    field: 'settlementCurrency',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'settlement_currency',
    },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'dict_item_status',
    },
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'InputTextArea',
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];

// 高级查询数据
export const superQuerySchema = {
  ownerCode: { title: '货主编码', order: 0, view: 'text', type: 'string' },
  ownerName: { title: '货主名称', order: 1, view: 'text', type: 'string' },
  country: { title: '国家', order: 2, view: 'text', type: 'string' },
  city: { title: '城市', order: 3, view: 'text', type: 'string' },
  address: { title: '地址', order: 4, view: 'text', type: 'string' },
  postalCode: { title: '邮编', order: 5, view: 'text', type: 'string' },
  email: { title: '邮箱', order: 6, view: 'text', type: 'string' },
  phone: { title: '电话', order: 7, view: 'text', type: 'string' },
  legalPerson: { title: '法人代表', order: 8, view: 'text', type: 'string' },
  contactPerson: { title: '联系人', order: 9, view: 'text', type: 'string' },
  contactPhone: { title: '联系人电话', order: 10, view: 'text', type: 'string' },
  licenseNumber: { title: '许可证号码', order: 11, view: 'text', type: 'string' },
  licenseValidDate: { title: '许可证有效期', order: 12, view: 'date', type: 'string' },
  licenseAttachment: { title: '许可证附件', order: 13, view: 'file', type: 'string' },
  usci: { title: '统一社会信用代码', order: 14, view: 'text', type: 'string' },
  businessLicenseAttachment: { title: '营业执照附件路径', order: 15, view: 'file', type: 'string' },
  settlementCurrency: { title: '结算币种', order: 16, view: 'list', type: 'string', dictCode: 'settlement_currency' },
  status: { title: '状态', order: 17, view: 'list', type: 'string', dictCode: 'dict_item_status' },
  remarks: { title: '备注', order: 18, view: 'textarea', type: 'string' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
