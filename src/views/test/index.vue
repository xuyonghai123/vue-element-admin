<template>
  <!--<el-table-->
    <!--:data="tableData"-->
    <!--border-->
    <!--style="width: 100%">-->
    <!--<el-table-column-->
      <!--prop="date"-->
      <!--label="日期"-->
      <!--width="150">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="name"-->
      <!--label="姓名"-->
      <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="province"-->
      <!--label="省份"-->
      <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="city"-->
      <!--label="市区"-->
      <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="地址"-->
      <!--width="300">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="zip"-->
      <!--label="邮编"-->
      <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--label="操作">-->
      <!--<template scope="scope">-->
        <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
        <!--<el-button type="text" size="small">编辑</el-button>-->
      <!--</template>-->
    <!--</el-table-column>-->
  <!--</el-table>-->
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 个人信息</span>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="密码修改">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import { formSubmit } from '@/api/test'
  export default {
    methods: {
      handleClick(row) {
        console.log(row)
      },
      onSubmit() {
        formSubmit(this.form).then(response => {
          console.log(response.data)
        })
        console.log('submit!')
      }
    },
    data() {
      return {
        form: {
          name: '111',
          region: '222',
          date1: '333',
          date2: '444',
          delivery: false,
          type: [],
          resource: '555',
          desc: '666'
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background:url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3762168136,2516154066&fm=27&gp=0.jpg);
  }

  .el-carousel__item:nth-child(2n+1) {
    background:url(http://img5.imgtn.bdimg.com/it/u=1273009144,3017595901&fm=27&gp=0.jpg);
  }
</style>
