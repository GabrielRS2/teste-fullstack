import {
	Entity,
	PrimaryGeneratedColumn,
	OneToMany,
	Column,
	ManyToOne,
} from "typeorm";
import User from "./user.entity";

@Entity("contact")
class Contact {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	cellphone: string;

	@ManyToOne(() => User)
	user: User
}

export default Contact;