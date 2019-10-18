public interface TfCard {
    /**
     * read data from TF card
     * @return
     */
    public String readTf();

    /**
     * write data to TF card
     * @param data
     * @return
     */
    public Boolean writeTf(String data);
}