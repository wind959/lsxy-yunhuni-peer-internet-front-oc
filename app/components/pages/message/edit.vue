<template>
	<div>
		<div class="flex flex-direction-column admin-table-header">
			<h4 v-if="status==0 || status==null || status==1">编辑消息</h4>
			<h4 v-if="status==-1">查看消息</h4>
		</div>
		<div class="">
			<div class="admin-form flex flex-direction-row align-items-c">
				<label for="title">标题:</label>
				<div class="">
					<input type="text" name="title" class="form-control" v-model='title'/>
				</div>
			</div>
			<div class="admin-form flex flex-direction-row align-items-s">
				<label for="content">正文:</label>
				<div class="flex">
					<textarea id="editor" placeholder="Balabala" autofocus></textarea>
				</div>
			</div>
			<div class="admin-form flex flex-direction-row align-items-s">
				<label for="content"></label>
				<div class="flex align-items-c">
					选择上线时间 &nbsp;&nbsp;<datetimepicker :width="200" :type="'time'" :value.sync="line" :uuid="'newtime'" :isstartday="'true'" ></datetimepicker>
				</div>
			</div>
			<div class="admin-form flex flex-direction-row align-items-s">
				<label for="content"></label>
				<div class="flex align-items-c">
					<button class="btn btn-primary" v-if="status==0 || status==null || status==1" @click="newMessage">发布</button>
					<button class="btn btn-default admin-margin-l" v-link="'/admin/message/list'">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Simditor from 'simditor'
	import {NewMessage,showMsg} from '../../../vuex/actions.js'
	import * as filter from '../../../utils/filters'
	export default {
		vuex: {
			getters: {
				
			},
			actions :{
				NewMessage,showMsg
			}
		},
		data(){
			return {
				text: 'test',
				date : '',
				title: '',
				content: '',
				line: '',
				status:'',
			}
		},
		components: {
			'datetimepicker': require('../../ui/datetimepicker.vue')
		},
		methods:{
			newMessage(){
				 if (!this.check()) return
				let params = {
					title: this.title,
					content: this.editor.getValue(),
					type: 1,
					status: 0,
					line: this.line
				}
				
				$.put('/message/edit/'+this.$route.params.mid, params).then((res)=>{
					if(res.success){
						this.$route.router.go('/admin/message/list')
					}
				})
			},
			check(){
		      // 标题不能为空
		      if(this.title === ''){
		        this.showMsg({content: '标题不能为空', type: 'danger'})
		        return false
		      }
		      // 内容不能为空
		      if(this.editor.getValue() === ''){
		        this.showMsg({content: '正文内容不能为空', type: 'danger'})
		        return false
		      }
		      // 时间不能为空
		      if(this.line === ''){
		        this.showMsg({content: '时间不能为空', type: 'danger'})
		        return false
		      }
		      return true
		    },
		},
		ready(){
			let mid = this.$route.params.mid
			let self = this
			$.get('/message/detail/' + mid).then((res)=> {
				console.log(res.data)
				
				self.editor = new Simditor({
					textarea: $('#editor'),
					toolbar:['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'],
				});
				
				self.status = res.data.status
				self.editor.setValue(res.data.content)
				self.title = res.data.title
				self.line = filter.totalDateWithNoSeconds(res.data.lineTime)
			})
		}
	}
</script>
<style lang="sass">
	@import '~simditor/styles/simditor.css';
	
	.admin-form {
		margin-top: 20px;
		$input-width: 900px;
	label {
		width: 50px;
		margin-bottom: 0px;
	}
	
	input, .simditor {
		width: $input-width;
	}
	}

</style>
