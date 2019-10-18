public class SdCardAdapter implements SdCard {
    /**
     * TF card
     */
    private TfCard tfCard;

    /**
     * read data from TF card (using SD card adpater)
     */
    @Override
    public String readSd() {
        return tfCard.readTf();
    }

    /**
     * write data to TF card (using SD card adpater)
     */
    @Override
    public Boolean writeSd(String data) {
        return tfCard.writeTf(data);
    }
}