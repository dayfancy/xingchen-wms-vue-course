import {BasicColumn} from '/src/components/Table';
import {FormSchema} from '/src/components/Table';
import { rules} from '/src/utils/helper/validator';
import { render } from '/src/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/src/utils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '库区编码',
    align:"center",
    dataIndex: 'zoneCode'
   },
   {
    title: '库区名称',
    align:"center",
    dataIndex: 'zoneName'
   },
   {
    title: '库区类型',
    align:"center",
    dataIndex: 'zoneType'
   },
   {
    title: '状态: 创建,禁用, 启用',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '是否可售库存 0-否, 1-是',
    align:"center",
    dataIndex: 'isSellable_dictText'
   },
   {
    title: '所属仓库',
    align:"center",
    dataIndex: 'warehouseId'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '库区编码',
    field: 'zoneCode',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入库区编码!'},
          ];
     },
  },
  {
    label: '库区名称',
    field: 'zoneName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入库区名称!'},
          ];
     },
  },
  {
    label: '库区类型',
    field: 'zoneType',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入库区类型!'},
          ];
     },
  },
  {
    label: '状态: 创建,禁用, 启用',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"dict_item_status"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入状态: 创建,禁用, 启用!'},
          ];
     },
  },
  {
    label: '是否可售库存 0-否, 1-是',
    field: 'isSellable',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"yn"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是否可售库存 0-否, 1-是!'},
          ];
     },
  },
  {
    label: '所属仓库',
    field: 'warehouseId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属仓库!'},
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
  zoneCode: {title: '库区编码',order: 0,view: 'text', type: 'string',},
  zoneName: {title: '库区名称',order: 1,view: 'text', type: 'string',},
  zoneType: {title: '库区类型',order: 2,view: 'text', type: 'string',},
  status: {title: '状态: 创建,禁用, 启用',order: 3,view: 'list', type: 'string',dictCode: 'dict_item_status',},
  isSellable: {title: '是否可售库存 0-否, 1-是',order: 4,view: 'list', type: 'string',dictCode: 'yn',},
  warehouseId: {title: '所属仓库',order: 5,view: 'link_table', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
