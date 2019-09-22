import java.util.Optional;

public class Main2
{
    public static void main(String[] args) {
        Article article = null;

        System.out.println(Optional.ofNullable(article).map(Article::getAuthor).map(Author::getName).orElse("Unknown"));
    }
}