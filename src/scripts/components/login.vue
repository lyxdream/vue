<template>
	<div class="login">
	<header>
		<div>
			<img src="/images/login_banner.jpg">
		</div>
	</header>
	<div class="ipt">
		<form>
			<div>
				<i class="yo-ico">&#xf0053;&ensp;</i>
				<input type="text" placeholder="请输入手机号"/>
			</div>
			<div>
				<i class="yo-ico">&#xe659;&ensp;</i>
				<input type="passwords" placeholder="输入密码"/>
			</div>
			<div>
				<input type="submit" value="登录"/>
			</div>
		<form>
	</div>
	<div></div>
	<footer>
		<div>忘记密码？</div>
		<div>
			<router-link to="/register" >
			立即注册
			</router-link>
		</div>
	</footer>
</div>
</template>