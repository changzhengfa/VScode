<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>网上购物系统首页</title>
    <style>
        /* CSS样式 */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .nav {
            background-color: #fff;
            padding: 10px;
        }
        .nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        .nav ul li {
            margin-right: 20px;
        }
        .nav a {
            text-decoration: none;
            color: #333;
        }
        .banner {
            background-image: url('banner.jpg');
            background-size: cover;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .banner h1 {
            color: #fff;
            font-size: 36px;
        }
        .categories {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
        }
        .category {
            border: 1px solid #ddd;
            padding: 20px;
            background-color: #fff;
            text-align: center;
        }
        .category h3 {
            margin: 0;
            padding: 10px 0;
        }
        .category p {
            margin: 0;
            padding: 10px 0;
        }
        .footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>网上购物系统</h1>
    </header>
    <nav class="nav">
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">商品分类</a></li>
            <li><a href="#">购物车</a></li>
            <li><a href="#">结账</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </nav>
    <section class="banner">
        <h1>欢迎来到我们的网上购物系统</h1>
    </section>
    <section class="categories">
        <div class="category">
            <h3>电子商品</h3>
            <p>最新的电子产品，满足您的各种需求。</p>
        </div>
        <div class="category">
            <h3>日常用品</h3>
            <p>日常生活必需品，品质保证。</p>
        </div>
        <div class="category">
            <h3>运动设备</h3>
            <p>专业的运动装备，助您保持健康生活。</p>
        </div>
    </section>
    <footer class="footer">
        <p>&copy; 2024 网上购物系统</p>
    </footer>
</body>
</html>
