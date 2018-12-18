<template>
    <div id="goodskind" >
         <el-button @click="open3"   type="success">添加</el-button>
      <div class="table">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
               >
                <el-table-column
                label="id"
                width="120"
                prop="id"
               
                >
                <!-- <template slot-scope="scope">{{ scope.row.ID }}</template> -->
                </el-table-column>
              
                <el-table-column
                prop="type"
                label="分类名"
                show-overflow-tooltip>
                </el-table-column>
               
               
                <el-table-column
                fixed="right"
                label="操作"
                width="160">
                    <template slot-scope="scope">
                        <el-button     type="primary" size="mini" @click="handleClick(scope.row)"  icon="el-icon-edit">编辑</el-button>
                        <el-button type="danger" size="mini"  @click="delClick(scope.row)"  icon="el-icon-delete">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    
     <div class="mack" v-if="newShow">
          <el-form class="userform">
               <el-form-item label="你要改的商品名字为:" >
                    <el-input type="text" id="goodsname" v-model="resetname" ></el-input>
                </el-form-item>
                 <el-button   @click="resetName"   type="primary" >确定</el-button>
                 <el-button     :plain="true" @click="newShow=!newShow">取消</el-button>
          </el-form>

     </div>

    </div>
</template>



<script>
export default {
    data(){
        return {
            tableData:[],
            newShow:false,
            resetname:'',
            url:'http://172.20.10.8:8888',
            resetID:0,

        }
    },
    methods:{
        handleClick(val){
             var index;
             this.newShow=!this.newShow;
             this.tableData.forEach((item,idx)=>{
              item.id==val.id ? index=idx : null
           });
            this.resetID=index;
        },
        delClick(val){
            var index;
           this.tableData.forEach((item,idx)=>{
              item.id==val.id ? index=idx : null
           });
           this.tableData.splice(index,1);
        },
        handleSelectionChange(val){
            console.log(val)
        },
        addKind(){
            console.log(6666);
        },
        open4() {
            this.$message.error('这个商品类型已经存在')
         },
        open5() {
            this.$message.error('商品类型不能为空')
         },
        open3() {
        this.$prompt('请输入新类型', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\S]{2,16}$/,
          inputErrorMessage: '内容格式不正确'
        }).then(({ value }) => {
        //验证商品类型是否被添加过
        var arr=this.tableData.map(item=>{
            return item.type
        });
         if(arr.indexOf(value)<0){
                this.$message({
            type: 'success',
            message: '新增的商品类型是: ' + value
          });
          this.tableData.push({
              type:value,
              id:this.tableData.length+1
          });
         }else{
           this.open4();
         }
       
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      resetName:function(){
          if(this.resetname!=''){
              this.tableData[this.resetID].type=this.resetname;
             
              this.newShow=!this.newShow;
          } else{
               this.open5();
          }

        
      }


    },
    created(){
       
        this.$axios.get(this.url+'/allData').then(result=>{
            var arr=[]
           result.data.forEach(item=>{
               arr.indexOf(item.type)>=0 ? null :arr.push(item.type);
           });
           this.tableData=arr.map((item,idx)=>{
                return {
                     type:item,
                     id:idx+1
                   } 
           })

            
        })
    }

}
</script>


<style>
 #goodskind .userform{
     width: 400px;
     height: 150px;
     position: absolute;
     left:50%;
     top:50%;
     margin-left: -200px;
     margin-top: -75px;
    background-color: #fff;
    border-radius: 10px;

 }
  .userform input{
      width:50%;
      margin-left: 10%;
  }
   .userform button{
       margin-left: 41px;
       margin-top: 10px;
   }
</style>
