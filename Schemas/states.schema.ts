import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class States {
   @Prop()
   name: string;
   @Prop()
   roleNumber: number;
   
}
export const StudentSchema = SchemaFactory.createForClass(States);