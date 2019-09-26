import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class Main
{
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Hello", "World", "GoodBye");

        whileLoop(list);

        forLoop(list);

        forInLoop(list);

        forEachLoop(list);
    }

    public static void whileLoop(Iterable iterable) {
        Iterator it = iterable.iterator();
        while(it.hasNext()) {
            System.out.println(it.next());
        }
    }

    public static void forLoop(Iterable iterable) {
        for(Iterator it = iterable.iterator(); it.hasNext(); ) {
            System.out.println(it.next());
        }
    }

    public static void forInLoop(Iterable iterable) {
        for(Object object : iterable) {
            System.out.println(object);
        }
    }

    public static void forEachLoop(Iterable iterable) {
        iterable.forEach(x -> System.out.println(x));
    }
}