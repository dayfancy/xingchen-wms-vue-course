import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '仓库代码',
    align:"center",
    dataIndex: 'warehouseCode'
   },
   {
    title: '仓库名称',
    align:"center",
    dataIndex: 'warehouseName'
   },
   {
    title: '仓库属性',
    align:"center",
    dataIndex: 'warehouseAttr_dictText'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '仓库代码',
    field: 'warehouseCode',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入仓库代码!'},
          ];
     },
  },
  {
    label: '仓库名称',
    field: 'warehouseName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入仓库名称!'},
          ];
     },
  },
  {
    label: '仓库属性',
    field: 'warehouseAttr',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"warehouse_attr"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入仓库属性!'},
          ];
     },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"wms_status",
        disabled: true,
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入状态: 创建,启动,禁用!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

// 高级查询数据
export const superQuerySchema = {
  warehouseCode: {title: '仓库代码',order: 0,view: 'text', type: 'string',},
  warehouseName: {title: '仓库名称',order: 1,view: 'text', type: 'string',},
  warehouseAttr: {title: '仓库属性',order: 2,view: 'list', type: 'string',dictCode: 'warehouse_attr',},
  status: {title: '状态: 创建,启动,禁用',order: 3,view: 'list', type: 'string',dictCode: 'dict_item_status',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
