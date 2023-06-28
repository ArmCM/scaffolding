import { getModelForClass, Prop, ReturnModelType} from "@typegoose/typegoose";

class Location {

    @Prop()
    public name: string;

    @Prop()
    public longitude: string;

    @Prop()
    public latitude: string;

    @Prop()
    public address: string;

    @Prop()
    public mail: string;

    @Prop()
    public opinions: string;

    @Prop()
    public phone: string;

    @Prop()
    public storeHours: string;

    public static async all(this: ReturnModelType<typeof Location>) {
        return this.find({}).exec();
    }
}

const LocationModel = getModelForClass(Location);

export default LocationModel;
