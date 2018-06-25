<?php
// 配置文件
function getRole() {
	$role = array (
			1 => '管理员',
			2 => '编辑' 
	);
	return $role;
}
function getMenu() {
	$menu = array (
			1 => array (
					'name' => '节目管理',
					'uri' => '/news' 
			),
			2 => array (
					'name' => '系统管理',
					'uri' => '/system' 
			) 
	);
	return $menu;
}
function getSubMenu() {
	$subMenu = array (
			1 => array (
					1 => array (
							'name' => '新闻管理',
							'uri' => '/news/index' 
					) 
			),
			2 => array (
					1 => array (
							'name' => '用户管理',
							'uri' => '/system/index' 
					) ,
					2 => array (
							'name' => '院校管理',
							'uri' => '/yiiCollege/index'
					)
			) 
	);
	return $subMenu;
}