# self 对象方法
class TestSelf:
  def self_id(self):
    return self # 返回self自身
t1 = TestSelf()
print(t1)
print(t1.self_id())
print(t1 is t1.self_id())