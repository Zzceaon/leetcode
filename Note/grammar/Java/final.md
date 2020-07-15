<!--
 * @Author: Zzceaon
 * @Date: 2020-07-15 22:23:58
 * @LastEditTime: 2020-07-15 22:26:41
 * @LastEditors: Please set LastEditors
 * @Description: final
 * @FilePath: \leetcode\Note\grammar\Java\final.md
--> 
- 修饰类当用final去修饰一个类的时候，表示这个类不能被继承。注意：a. 被final修饰的类，final类中的成员变量可以根据自己的实际需要设计为fianl。b. final类中的成员方法都会被隐式的指定为final方法。说明：在自己设计一个类的时候，要想好这个类将来是否会被继承，如果可以被继承，则该类不能使用fianl修饰，在这里呢，一般来说工具类我们往往都会设计成为一个fianl类。在JDK中，被设计为final类的有String、System等。
- 被final修饰的方法不能被重写。
  - 一个类的private方法会隐式的被指定为final方法。
  - 如果父类中有final修饰的方法，那么子类不能去重写。
- 修饰成员变量
  - 必须要赋初始值，而且是只能初始化一次。
  -  被fianl修饰的成员变量赋值，有两种方式：1、直接赋值 2、全部在构造方法中赋初值。
  - 如果修饰的成员变量是基本类型，则表示这个变量的值不能改变。
  - 如果修饰的成员变量是一个引用类型，则是说这个引用的地址的值不能修改，但是这个引用所指向的对象里面的内容还是可以改变的。