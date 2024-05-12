const UserService = require('../services/usersServices')
const { use } = require('../routes');
const { Model } = require("sequelize");
const ProfileService = require('../services/profileService')

class ProfileController {
    async getProfile(req, res) {
        try {
            const userId = req.id;
            const profile = await ProfileService.getProfileForUser(userId);
            if (profile) {
                res.json(profile);
            } else {
                res.status(404).send('Data of profile not found');
            }
        } catch (error) {
            console.error('Error getting profile:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async createProfile(req, res) {
        try {
            const userId = req.id;
            const profileData = req.body;
            const profile = await ProfileService.createProfileForUser(userId, profileData);
            res.send(profile);
        } catch (error) {
            console.error('Error creating profile:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async updateProfile(req, res) {
        try {
            const userId = req.id;
            const profileDataToUpdate = req.body; 
            const updatedProfile = await ProfileService.updateProfileForUser(userId, profileDataToUpdate);
            res.send(updatedProfile);
        } catch (error) {
            console.error('Error updating profile:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new ProfileController