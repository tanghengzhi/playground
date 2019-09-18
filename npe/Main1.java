public class Main1
{
    public static void main(String[] args) {
        Article article = null;

        if (article != null && article.getAuthor() != null) {
            System.out.println(article.getAuthor().getName());
        } else {
            System.out.println("Unknown");
        }
    }
}