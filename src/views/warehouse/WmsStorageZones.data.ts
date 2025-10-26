import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '库区编码',
    align: 'center',
    dataIndex: 'zoneCode',
  },
  {
    title: '库区名称',
    align: 'center',
    dataIndex: 'zoneName',
  },
  {
    title: '库区类型',
    align: 'center',
    dataIndex: 'zoneType_dictText',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status_dictText',
  },
  {
    title: '是否可售库存',
    align: 'center',
    dataIndex: 'isSellable_dictText',
  },
  {
    title: '所属仓库',
    align: 'center',
    dataIndex: 'warehouseId_dictText',
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
    label: '库区编码',
    field: 'zoneCode',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入库区编码!' }, { ...rules.duplicateCheckRule('wms_storage_zones', 'zone_code', model, schema)[0] }];
    },
  },
  {
    label: '库区名称',
    field: 'zoneName',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入库区名称!' }];
    },
  },
  {
    label: '库区类型',
    field: 'zoneType',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'zone_type',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入库区类型!' }];
    },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'wms_status',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入状态' }];
    },
    dynamicDisabled: ({ values }) => {
      // 当存在id时（即编辑状态）禁用该字段
      return !!values.id;
    }
  },
  {
    label: '是否可售库存',
    field: 'isSellable',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'yn',
    },
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入是否可售库存' }];
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
  zoneCode: { title: '库区编码', order: 0, view: 'text', type: 'string' },
  zoneName: { title: '库区名称', order: 1, view: 'text', type: 'string' },
  zoneType: { title: '库区类型', order: 2, view: 'list', type: 'string', dictCode: 'zone_type' },
  status: { title: '状态:', order: 3, view: 'list', type: 'string', dictCode: 'wms_status' },
  isSellable: { title: '是否可售库存', order: 4, view: 'list', type: 'string', dictCode: 'yn' },
  warehouseId: { title: '所属仓库', order: 5, view: 'list', type: 'string', dictTable: 'wms_warehouses', dictCode: 'id', dictText: 'warehouse_name' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
