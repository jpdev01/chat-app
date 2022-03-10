package com.chat.domain.user;

import com.chat.domain.base.BaseEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class User extends BaseEntity {

    private Long id;

    private String userName;

    private String fullname;

    private String cpf;

    @ManyToMany
    private List<User> friends;
}
