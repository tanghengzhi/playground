import java.util.function.Consumer;

public class Main
{
    public static void echo(Consumer<String> consumer, String t) {
        consumer.accept(t);
    }

    public static void main(String[] args) {
        Consumer<String> hello = string -> System.out.println("hello, " + string);

        echo(hello, "world");
    }
}