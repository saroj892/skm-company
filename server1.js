const express = require('express');
const fs = require('fs-extra');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Simulate a backup function (for example, backing up files or data)
const createBackup = async () => {
    try {
        // Simulate backing up data (copying files to a backup folder)
        await fs.copy('./data', './backup');  // Assuming 'data' is the folder you want to back up
        return { success: true };
    } catch (error) {
        console.error("Error during backup:", error);
        return { success: false };
    }
};

// Create backup route
app.post('/create-backup', async (req, res) => {
    const backupResult = await createBackup();

    if (backupResult.success) {
        res.json({ success: true, message: 'Backup completed successfully!' });
    } else {
        res.json({ success: false, message: 'Backup failed.' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
