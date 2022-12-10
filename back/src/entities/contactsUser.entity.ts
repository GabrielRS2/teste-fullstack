import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
} from "typeorm";
import User from "./user.entity";
import Contacts from "./contacts.entity";

@Entity("contactsUser")
class ContactsUser {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, {eager: true})
	user: User

	@ManyToOne(() => Contacts)
	contactList: Contacts
}

export default ContactsUser;