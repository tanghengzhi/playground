public interface SdCard {
    /**
     * read data from SD card
     * @return
     */
    public String readSd();

    /**
     * write data to SD card
     * @param data
     * @return
     */
    public Boolean writeSd(String data);
}