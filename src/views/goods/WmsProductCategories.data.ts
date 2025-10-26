import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '类别名称',
    align: 'left',
    dataIndex: 'categoryName',
  },
  {
    title: '节点编码',
    align: 'center',
    dataIndex: 'categoryCode',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status_dictText',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '类别名称',
    field: 'categoryName',
    component: 'Input',
    dynamicRules: ({ model, schema }) => {
      return [{ required: true, message: '请输入类别名称!' }];
    },
  },
  {
    label: '父节点',
    field: 'parentId',
    component: 'JTreeSelect',
    componentProps: {
      dict: 'wms_product_categories,category_name,id',
      pidField: 'parent_id',
      pidValue: '0',
      hasChildField: 'has_child',
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
      return [{ required: true, message: '请输入状态 0-未启用 1-启用!' }];
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
  categoryName: { title: '类别名称', order: 0, view: 'text', type: 'string' },
  categoryCode: { title: '节点编码', order: 1, view: 'text', type: 'string' },
  status: { title: '状态 0-未启用 1-启用', order: 3, view: 'list', type: 'string', dictCode: 'wms_status' },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
