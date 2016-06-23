class HelloWorld
  def initialize(name)
    @name = name
  end

  def say_hello
    puts "Hello #{@name}!"
  end
end

hello = HelloWorld.new('World')
hello.say_hello
