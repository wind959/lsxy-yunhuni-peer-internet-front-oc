<template>

	<div class="flex  flex-direction-column single-box  while" v-for="app in appdata" v-link="'/admin/tenant/detail/'+$route.params.uid+'/app/detail'">
		<header class="flex flex-1 flex-direction-column header-box normal-font-size">
			<div class="flex flex-direction-column justify-content-c align-items-c">
				<img src="../../../../assets/images/app.png" width="100" height="100" alt="">
				<p class="bigger-font-size name">{{ app.name}}</p>
				<p>应用标识: {{ app.appid}}</p>
				<p class="text-center">{{ app.introduce ? app.introduce :'这家伙很懒，什么都没留下'}}</p>
			</div>
		</header>
		<main class="flex whilebg middle-font-color  flex-direction-column main-box ">
			<div class="flex justify-content-c align-items-c">
				<div class="hr-title flex middle-font-size middle-font-color">上月指标</div>
			</div>
			<div class="flex flex-1 justify-content-c align-items-c ">
				<div class="flex flex-1 flex-direction-column align-items-c append-solid ">
					<span class="green money">{{ app.consume ? app.consume : '0' }}</span>
					<span>消费额(元)</span>
				</div>

				<div class="flex flex-1 flex-direction-column align-items-c append-solid">
					<span class="green money">{{ app.conversation ? app.conversation : '0' }}</span>
					<span>会话量(次)</span>
				</div>
				<div class="flex flex-1 flex-direction-column align-items-c">
					<span class="green money">{{ app.traffic ? app.traffic : '0' }}</span>
					<span>话务量(分钟)</span>
				</div>
			</div>
		</main>
	</div>

</template>

<script>
	export default{
		props:{
			appdata :{
				type:Array
			}
		}
	}
</script>


<style lang="sass" scoped>
	.single-box{
		width: 49%;
		margin-bottom: 20px;
	}
	.header-box{
		padding: 20px;
		background-color:#97a1be;
		.name{
			margin-top: 10px;
		}
	}
	.main-box{
		height: 183px;
		width: 100%;
		padding: 10px 0;
	}
	.data-box{
		padding-left: 20px;
	}
	.money{
		font-size: 2.6rem;
	}
</style>