import mongoose, {Document, Schema} from 'mongoose';

export interface ILocation extends Document {
    name: string;
    longitude: string;
    latitude: string;
    address: string;
    mail: string;
    opinions: string;
    phone: string;
    storeHours: string;
}

const LocationSchema: Schema<ILocation> = new mongoose.Schema<ILocation>({
    name: { type: String, required: true },
    longitude: { type: String, required: true, unique: true },
    latitude: { type: String, required: true },
    address: { type: String, required: true },
    mail: { type: String, required: true },
    opinions: { type: String, required: true },
    phone: { type: String, required: true },
    storeHours: { type: String, required: true },
});

export const LocationModel = mongoose.model('Location', LocationSchema);

export const getLocation = () => LocationModel.find();

