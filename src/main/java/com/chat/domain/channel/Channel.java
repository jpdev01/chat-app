package com.chat.domain.channel;

import com.chat.domain.base.BaseEntity;
import com.chat.domain.user.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Channel extends BaseEntity {

    @OneToMany
    private List<User> participants;

}
