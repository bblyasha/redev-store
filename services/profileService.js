const { Model } = require('sequelize');
const { UsersModel } = require('../models/model');
const { UserProfileModel } = require('../models/model')
class ProfileService {
    #COLLECTION = 'profiles'
    async getProfileForUser(userId) {
        try {
            const profile = await UserProfileModel.findOne({
                where: { userId: userId }
            });

            return profile;
        } catch (error) {
            console.error('Error finding profile:', error);
        }
    }

    async createProfileForUser(userId, profileData) {
        try {
            const profile = await UserProfileModel.create({
                userId: userId,
                ...profileData
            });
            return profile;
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    }

    async updateProfileForUser(userId, profileDataToUpdate) {
        try {
            const [updatedRowsCount, updatedProfiles] = await UserProfileModel.update(
                profileDataToUpdate,
                { where: { userId: userId }, returning: true }
            );
            if (updatedRowsCount === 0) {
                throw new Error('Profile not found or user not authorized to update');
            }
            return updatedProfiles[0];
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    }

}

module.exports = new ProfileService