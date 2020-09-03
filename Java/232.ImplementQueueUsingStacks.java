class MyQueue {
  private int front;
  private Stack<Integer> s1;
  private Stack<Integer> s2;
  public MyQueue() {
    s1 = new Stack<>();
    s2 = new Stack<>();
  }
  // 使用两个栈入队O(n) O(n)
  public void push(int x) {
    if (s1.empty()) front = x;
    while (!s1.isEmpty()) {
      s2.push(s1.pop());
    }
    s2.push(x);
    while (!s2.isEmpty()) {
      s1.push(s2.pop());
    }
  }
  // O(1) O(1)
  public int pop() {
    int res = s1.pop();
    if (!s1.empty()) {
      front = s1.peek();
    }
    return res;
  }
  // O(1) O(1)
  public int peek() {
    return front;
  }
  // O(1) O(1)
  public boolean empty() {
    return s1.isEmpty();
  }
}

class MyQueue {
  private int front;
  private Stack<Integer> s1;
  private Stack<Integer> s2;
  public MyQueue() {
    s1 = new Stack<>();
    s2 = new Stack<>();
  }
  // 使用两个栈入队 O(1) O(n)
  public void push(int x) {
    if (s1.empty()) front = x;
    s1.push(x);
  }
  // 摊还复杂度:O(1) O(1)
  public int pop() {
    if (s2.isEmpty()) {
      while (!s1.isEmpty()) {
        s2.push(s1.pop());
      }
    }
    return s2.pop();
  }
  // O(1) O(1)
  public int peek() {
    if (!s2.isEmpty()) return s2.peek();
    return front;
  }
  // O(1) O(1)
  public boolean empty() {
    return s1.isEmpty() && s2.isEmpty();
  }
}