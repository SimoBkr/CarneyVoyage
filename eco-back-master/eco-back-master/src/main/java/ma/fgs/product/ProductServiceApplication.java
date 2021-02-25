package ma.fgs.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ma.fgs.product.domain.Account;
import ma.fgs.product.domain.Role;
import ma.fgs.product.repository.AccountRepository;
import ma.fgs.product.repository.RoleRepository;

@SpringBootApplication
public class ProductServiceApplication implements CommandLineRunner {
	
	@Autowired
	private RoleRepository roleRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class);
	}

	@Override
	public void run(String... args) throws Exception {
		if(roleRepo.count() == 0) {
			roleRepo.save(new Role("ADMIN", "Administrator"));
			roleRepo.save(new Role("USER", "User"));
		}
	}
}
