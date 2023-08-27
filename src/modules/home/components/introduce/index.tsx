/* eslint-disable react/jsx-curly-brace-presence */
import styled from '@emotion/styled/macro';
import Heading from '@shared/components/atoms/Heading';
import Container from '@shared/components/common/Container';
import Animate from '@shared/components/molecules/Animate';
import React from 'react';
import tw from 'twin.macro';

const Introduce: React.FC = () => {
  return (
    <Container>
      <div className='relative overflow-hidden'>
        <Animate name='fade-right'>
          <Heading className='text-[32px] md:text-[56px] font-semibold text-black900'>Giới thiệu</Heading>
        </Animate>
        <div className='flex flex-col gap-y-20 md:gap-y-10 mt-4 md:mt-10'>
          <Animate name='fade-right' delay={500}>
            <Card className='before:left-0'>
              Xin chào, Tôi là <b>Vũ Đàm Thùy Dung</b>, sinh năm 2004 và được biết đến với cái tên <b>Yung</b>. Tôi đã
              theo học tại Nhạc viện TPHCM trong suốt 4 năm và từng là học trò của Nhạc Sĩ Phương Uyên trong nhóm Ba Con
              Mèo, đạt điểm tuyệt đối 9,5.
            </Card>
          </Animate>

          <Animate name='fade-left' delay={500}>
            <Card className='before:right-0 ml-auto text-right'>
              Vẻ đẹp dễ thương và giọng hát trời phú của tôi cho phép tôi tự tin thể hiện nhiều thể loại âm nhạc khác
              nhau, từ <b>Dân ca, Bolero, Nhạc trẻ, RnB, Cải Lương</b> cho đến <b>Rap Melody</b>. Sự đa dạng này đã giúp
              tôi nổi bật trong cuộc thi <b>The Voice Kids</b> năm 2016 và đến được vòng tứ kết, đồng thời thu hút triệu
              lượt xem trên các mạng xã hội thông qua một buổi biểu diễn ấn tượng với bài hát {'"Dạ cổ hoài lang"'} của
              nhạc sĩ Cao Văn Lầu.
            </Card>
          </Animate>

          <Animate name='fade-right' delay={500}>
            <Card className='before:left-0'>
              Không chỉ dừng lại ở đó, tôi đã tham gia và xuất sắc đạt giải 3 tại chương trình{' '}
              <b>Thần Tượng Tương Lai</b> và <b>Ai Sẽ Thành Sao Nhi</b>. Điều này chứng minh tôi không chỉ có giọng hát
              mạnh mẽ mà còn có khả năng biểu diễn đỉnh cao trên sân khấu.
            </Card>
          </Animate>

          <Animate name='fade-left' delay={500}>
            <Card className='before:right-0 ml-auto text-right'>
              Đối với tôi, âm nhạc không chỉ là sự đam mê, mà còn là cách tôi thể hiện bản thân và kết nối với mọi
              người. Vi thế, tôi còn góp mặt trong các <b>gameshow</b> truyền hình nổi tiếng, tôi luôn sẵn sàng đối mặt
              với thử thách và tạo ra những trải nghiệm đáng nhớ.
            </Card>
          </Animate>
          <Animate name='fade-right' delay={500}>
            <Card className='before:left-0'>
              <b>Hiện tại, kênh Tiktok của tôi đã đạt hơn 1,5 triệu Followers và hơn 30 triệu lượt thích</b>, đặc biệt
              những video ca hát của tôi thường xuyên đạt được hàng triệu lượt xem và được nhiều trang báo mạng chia sẻ
              và lên xu hướng.
            </Card>
          </Animate>
        </div>
      </div>
    </Container>
  );
};

export default Introduce;

const Card = styled.div`
  ${tw`text-sm md:text-lg pt-4 text-black800 w-full md:w-[45%] relative before:content-[""] before:absolute before:w-[40%] before:top-0 before:h-1 before:rounded-lg before:bg-gray-500`}
`;
