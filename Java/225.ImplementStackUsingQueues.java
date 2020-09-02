class MyStack {
  private LinkedList<Integer> q;
  public MyStack() {
    q = new LinkedList<>();
  }
  // 一个队列压入O(n)弹出O(1)
  public void push(int x) {
    q.add(x);
    int sz = q.size();
    while (sz > 1) {
      q.add(q.remove());
      sz--;
    }
  }
  // O(1) O(1)
  public int pop() {
    return q.remove();
  }
  // O(1) O(1)
  public int top() {
    return q.peek();
  }
  // O(1) O(1)
  public boolean empty() {
    return q.isEmpty();
  }
}