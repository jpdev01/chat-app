package com.chat.domain.message;

import com.chat.domain.base.BaseEntity;
import com.chat.domain.channel.Channel;
import com.chat.domain.user.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@NoArgsConstructor
@Data
public class Message extends BaseEntity {

    private String content;

    @OneToOne
    private User sender;

    @OneToOne
    private Channel destination;
}
