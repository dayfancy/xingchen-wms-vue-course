import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '库位编码',
    align: 'center',
    dataIndex: 'locationCode',
  },
  {
    title: '储位类别',
    align: 'center',
    dataIndex: 'locationCategory_dictText',
  },
  {
    title: '库位类型',
    align: 'center',
    dataIndex: 'locationType_dictText',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status_dictText',
  },
  {
    title: '所属仓库',
    align: 'center',
    dataIndex: 'warehouseId_dictText',
  },
  {
    title: '所属库区',
    align: 'center',
    dataIndex: 'zoneId_dictText',
  },
  {
    title: '巷道',
    align: 'center',
    dataIndex: 'locationAisle',
  },
  {
    title: '排',
    align: 'center',
    dataIndex: 'locationLine',
  },
  {
    title: '列',
    align: 'center',
    dataIndex: 'locationRank',
  },
  {
    title: '层',
    align: 'center',
    dataIndex: 'locationLayer',
  },
  {
    title: '长',
    align: 'center',
    dataIndex: 'locationLength',
  },
  {
    title: '宽',
    align: 'center',
    dataIndex: 'locationWidth',
  },
  {
    title: '容积',
    align: 'center',
    dataIndex: 'locationCapacity',
  },
  {
    title: '承重',
    align: 'center',
    dataIndex: 'loadCapacity',
  },
  {
    title: '是否可售',
    align: 'center',
    dataIndex: 'isSellable_dictText',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '所属仓库',
    field: 'warehouseId',
    component: 'JSelectMultiple',
    componentProps: {
      dictCode: 'wms_warehouses,warehouse_name,id',
    },
    //colProps: {span: 6},
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '库位编码',
    field: 'locationCode',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [
        { required: true, message: '请输入库位编码!' },
        { ...rules.duplicateCheckRule('wms_storage_locations', 'location_code', model, schema)[0] },
      ];
    },
  },
  {
    label: '储位类别',
    field: 'locationCategory',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'location_category',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入储位类别!' }];
    },
  },
  {
    label: '库位类型',
    field: 'locationType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'location_type',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入库位类型!' }];
    },
  },
  {
    label: '状态',
    field: 'status',
    defaultValue: '1',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'wms_status',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入状态!' }];
    },
  },
  {
    label: '所属仓库',
    field: 'warehouseId',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'wms_warehouses,warehouse_name,id',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入所属仓库!' }];
    },
  },
  {
    label: '所属库区',
    field: 'zoneId',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'wms_storage_zones,zone_name,id',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入所属库区!' }];
    },
  },
  {
    label: '巷道',
    field: 'locationAisle',
    component: 'Input',
  },
  {
    label: '排',
    field: 'locationLine',
    component: 'Input',
  },
  {
    label: '列',
    field: 'locationRank',
    component: 'Input',
  },
  {
    label: '层',
    field: 'locationLayer',
    component: 'Input',
  },
  {
    label: '长',
    field: 'locationLength',
    component: 'InputNumber',
  },
  {
    label: '宽',
    field: 'locationWidth',
    component: 'InputNumber',
  },
  {
    label: '容积',
    field: 'locationCapacity',
    component: 'InputNumber',
  },
  {
    label: '承重',
    field: 'loadCapacity',
    component: 'InputNumber',
  },
  {
    label: '是否可售',
    field: 'isSellable',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'yn',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入是否可售!' }];
    },
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
  locationCode: { title: '库位编码', order: 0, view: 'text', type: 'string' },
  locationCategory: { title: '储位类别', order: 1, view: 'list', type: 'string', dictCode: 'location_category' },
  locationType: { title: '库位类型', order: 2, view: 'list', type: 'string', dictCode: 'location_type' },
  status: { title: '状态', order: 3, view: 'list', type: 'string', dictCode: 'wms_status' },
  warehouseId: { title: '所属仓库', order: 4, view: 'list', type: 'string', dictTable: 'wms_warehouses', dictCode: 'id', dictText: 'warehouse_name' },
  zoneId: { title: '所属库区', order: 5, view: 'list', type: 'string', dictTable: 'wms_storage_zones', dictCode: 'id', dictText: 'zone_name' },
  locationAisle: { title: '巷道', order: 6, view: 'text', type: 'string' },
  locationLine: { title: '排', order: 7, view: 'text', type: 'string' },
  locationRank: { title: '列', order: 8, view: 'text', type: 'string' },
  locationLayer: { title: '层', order: 9, view: 'text', type: 'string' },
  locationLength: { title: '长', order: 10, view: 'number', type: 'number' },
  locationWidth: { title: '宽', order: 11, view: 'number', type: 'number' },
  locationCapacity: { title: '容积', order: 12, view: 'number', type: 'number' },
  loadCapacity: { title: '承重', order: 13, view: 'number', type: 'number' },
  isSellable: { title: '是否可售', order: 14, view: 'list', type: 'string', dictCode: 'yn' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
